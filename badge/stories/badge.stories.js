import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getBadge } from '@divriots/starter-furious';

provideDesignSystem().register(getBadge());

export const defaultStory = () => html`
  <div>
    <style>
      /* For example purposes only. App authors needs to define */

      fs-badge {
        --badge-fill-success: #6a9728;
        --badge-fill-warning: #faa21b;
        --badge-fill-error: #dd2222;
        --badge-fill-new: #fe8d55;
        --badge-fill-transparent: transparent;
        --badge-color-black: #000000;
        --badge-color-white: #ffffff;
      }
    </style>
    <fs-badge fill="success" color="white">Success</fs-badge>
    <fs-badge fill="warning" color="white">Warning</fs-badge>
    <fs-badge fill="error" color="white">Error</fs-badge>
    <fs-badge fill="new" color="white">New</fs-badge>
  </div>
`;
defaultStory.storyName = 'Default';
