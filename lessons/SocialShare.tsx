import React, { useState } from 'react';
import { Icon } from '../Icon';
import { Modal } from '../Modal';

import styles from './SocialShare.module.css';

type LinkAttributes = {
  social: string;
  title: string;
  link: string;
};

type GetLinkAttributesProps = {
  target: string;
  rel: string;
  href: string;
  title: string;
};

// refactor using the open closed principle
class SocialMediaType {
  constructor(public linkAttributes: LinkAttributes) {}

  getLinkAttributes(): GetLinkAttributesProps {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: this.linkAttributes.link,
      title: this.linkAttributes.title,
    };
  }
}

class Facebook extends SocialMediaType {
  constructor(linkAttributes: LinkAttributes) {
    super(linkAttributes);
  }

  getLinkAttributes(): GetLinkAttributesProps {
    return {
      ...super.getLinkAttributes(),
      href: `https://www.facebook.com/sharer/sharer.php?u=${this.linkAttributes.link}`,
      title: `Share ${this.linkAttributes.title}`,
    };
  }
}

class LinkedIn extends SocialMediaType {
  constructor(linkAttributes: LinkAttributes) {
    super(linkAttributes);
  }

  getLinkAttributes(): GetLinkAttributesProps {
    return {
      ...super.getLinkAttributes(),
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${this.linkAttributes.link}&title=${this.linkAttributes.title}`,
      title: `Share ${this.linkAttributes.title}`,
    };
  }
}

class Twitter extends SocialMediaType {
  constructor(linkAttributes: LinkAttributes) {
    super(linkAttributes);
  }

  getLinkAttributes(): GetLinkAttributesProps {
    return {
      ...super.getLinkAttributes(),
      href: `https://twitter.com/intent/tweet?url=${this.linkAttributes.link}&text=${this.linkAttributes.title}`,
      title: `Tweet ${this.linkAttributes.title}`,
    };
  }
}

class Email extends SocialMediaType {
  constructor(linkAttributes: LinkAttributes) {
    super(linkAttributes);
  }

  getLinkAttributes(): GetLinkAttributesProps {
    return {
      ...super.getLinkAttributes(),
      href: `mailto:?subject=${this.linkAttributes.title}&body=${this.linkAttributes.link}`,
      title: `Email ${this.linkAttributes.title}`,
    };
  }
}

class SMS extends SocialMediaType {
  constructor(linkAttributes: LinkAttributes) {
    super(linkAttributes);
  }

  getLinkAttributes(): GetLinkAttributesProps {
    return {
      ...super.getLinkAttributes(),
      href: `sms://?&body=Read%20${this.linkAttributes.title}%20at%20${this.linkAttributes.link}`,
      title: `Share ${this.linkAttributes.title}`,
    };
  }
}

class Default extends SocialMediaType {
  constructor(linkAttributes: LinkAttributes) {
    super(linkAttributes);
  }

  getLinkAttributes(): GetLinkAttributesProps {
    return {
      ...super.getLinkAttributes(),
      href: this.linkAttributes.link,
    };
  }
}

class SocialMediaRegistry {
  private socialMediaTypes = new Map<string, any>();

  registerSocialMediaType(type: string, constructor: any) {
    this.socialMediaTypes.set(type, constructor);
  }

  createSocialMedia(social: string, title: string, link: string) {
    const linkAttributes = { social, title, link };
    const SocialMediaClass =
      this.socialMediaTypes.get(social) || Default;
    return new SocialMediaClass(linkAttributes);
  }
}

const socialMediaRegistry = new SocialMediaRegistry();

// Each type registers itself
socialMediaRegistry.registerSocialMediaType('facebook', Facebook);
socialMediaRegistry.registerSocialMediaType('linkedin', LinkedIn);
socialMediaRegistry.registerSocialMediaType('twitter', Twitter);
socialMediaRegistry.registerSocialMediaType('email', Email);
socialMediaRegistry.registerSocialMediaType('sms', SMS);

const SocialShare = ({ post }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const getSocialMediaLinkAttributes = (
    social: string,
    title: string,
    link: string,
  ) => {
    const socialMedia = socialMediaRegistry.createSocialMedia(
      social,
      title,
      link,
    );
    const linkAttributes = socialMedia.getLinkAttributes();
    return linkAttributes;
  };

  const copyLink = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(post.link);
  };
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className={styles.socialshare}>
      <a
        {...getSocialMediaLinkAttributes(
          'facebook',
          post.title,
          post.link,
        )}
      >
        <img
          loading="lazy"
          height="24"
          width="24"
          src="https://res.cloudinary.com/highereducation/images/v1635366072/BestColleges.com/facebook_14836b1578/facebook_14836b1578.svg"
          alt="Facebook"
        />
      </a>
      <a
        {...getSocialMediaLinkAttributes(
          'linkedin',
          post.title,
          post.link,
        )}
      >
        <img
          loading="lazy"
          height="24"
          width="24"
          src="https://res.cloudinary.com/highereducation/images/v1635366076/BestColleges.com/linkedin_14837a1ffe/linkedin_14837a1ffe.svg"
          alt="LinkedIn"
        />
      </a>
      <a
        {...getSocialMediaLinkAttributes(
          'twitter',
          post.title,
          post.link,
        )}
      >
        <img
          loading="lazy"
          height="24"
          width="24"
          src="https://res.cloudinary.com/highereducation/images/v1635366074/BestColleges.com/twitter_14839b85bb/twitter_14839b85bb.svg"
          alt="Twitter"
        />
      </a>
      <a
        {...getSocialMediaLinkAttributes(
          'email',
          post.title,
          post.link,
        )}
      >
        <img
          loading="lazy"
          height="24"
          width="24"
          src="https://res.cloudinary.com/highereducation/images/v1635366068/BestColleges.com/email/email.svg"
          alt="Email"
        />
      </a>
      <button onClick={(e) => copyLink(e)}>
        <img
          height="24"
          width="24"
          className="w-6"
          loading="lazy"
          src="https://res.cloudinary.com/highereducation/images/v1635369081/BestColleges.com/link/link.svg"
          alt="Copy link"
        />
      </button>
      <button onClick={handleOpenModal}>
        <img
          src="https://res.cloudinary.com/highereducation/images/v1635366070/BestColleges.com/share/share.svg"
          alt="share post"
        />
      </button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        title="Share this article"
        variant="base"
      >
        <div className="m-auto block lg:w-80">
          <div className="grid grid-cols-2 gap-3">
            <a
              className="flex items-center"
              {...getSocialMediaLinkAttributes(
                'facebook',
                post.title,
                post.link,
              )}
            >
              <img
                className="w-8"
                loading="lazy"
                height="32"
                width="32"
                src="https://res.cloudinary.com/highereducation/images/v1635366072/BestColleges.com/facebook_14836b1578/facebook_14836b1578.svg"
                alt="Facebook"
              />
              <div className="text-gray-700 text-xs pl-2">
                Facebook
              </div>
            </a>

            <a
              className="flex items-center"
              {...getSocialMediaLinkAttributes(
                'linkedin',
                post.title,
                post.link,
              )}
            >
              <img
                className="w-8"
                loading="lazy"
                height="32"
                width="32"
                src="https://res.cloudinary.com/highereducation/images/v1635366076/BestColleges.com/linkedin_14837a1ffe/linkedin_14837a1ffe.svg"
                alt="LinkedIn"
              />
              <div className="text-gray-700 text-xs pl-2">
                LinkedIn
              </div>
            </a>
            <a
              className="flex items-center"
              {...getSocialMediaLinkAttributes(
                'twitter',
                post.title,
                post.link,
              )}
            >
              <img
                className="w-8"
                loading="lazy"
                height="32"
                width="32"
                src="https://res.cloudinary.com/highereducation/images/v1635366074/BestColleges.com/twitter_14839b85bb/twitter_14839b85bb.svg"
                alt="Twitter"
              />
              <div className="text-gray-700 text-xs pl-2">
                Twitter
              </div>
            </a>
            <a
              className="flex items-center"
              {...getSocialMediaLinkAttributes(
                'email',
                post.title,
                post.link,
              )}
            >
              <img
                className="w-8"
                loading="lazy"
                height="32"
                width="32"
                src="https://res.cloudinary.com/highereducation/images/v1635366068/BestColleges.com/email/email.svg"
                alt="Email"
              />
              <div className="text-gray-700 text-xs pl-2">Email</div>
            </a>
            <a
              className="flex items-center"
              {...getSocialMediaLinkAttributes(
                'sms',
                post.title,
                post.link,
              )}
            >
              <img
                className="w-8"
                loading="lazy"
                height="32"
                width="32"
                src="https://res.cloudinary.com/highereducation/images/v1635369083/BestColleges.com/sms/sms.svg"
                alt="SMS"
              />
              <div className="text-gray-700 text-xs pl-2">SMS</div>
            </a>
            <button
              onClick={(e) => copyLink(e)}
              className="flex items-center"
              title="Share {{ post.title }}"
            >
              <img
                loading="lazy"
                height="32"
                width="32"
                className="w-8"
                src="https://res.cloudinary.com/highereducation/images/v1635369081/BestColleges.com/link/link.svg"
                alt="Copy link"
              />
              <div
                onClick={(e) => copyLink(e)}
                className="text-gray-700 text-xs pl-2"
              >
                Copy link
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SocialShare;
