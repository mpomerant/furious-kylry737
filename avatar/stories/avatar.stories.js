import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getAvatar } from '@divriots/starter-furious';

provideDesignSystem().register(getAvatar());

export const defaultStory = () => html`
  <div>
    <style></style>

    <fs-avatar
      alt="Annie's profile image"
      link="#"
      name="Annie Lennox"
      shape="circle"
      fill="accent-primary"
    ></fs-avatar>

    <fs-avatar
      alt="Annie's profile image"
      link="#"
      src="https://via.placeholder.com/32"
      name="Annie Lennox"
      shape="circle"
      fill="accent-primary"
    ></fs-avatar>
  </div>
`;
defaultStory.storyName = 'Default';
