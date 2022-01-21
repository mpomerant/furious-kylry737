import { css, ElementStyles } from '@microsoft/fast-element';
import { AccordionItemOptions, ElementDefinitionContext } from '@microsoft/fast-foundation';
import { accordionItemStyles as styles, neutralLayer3, accentForegroundRest } from '@microsoft/fast-components';

/**
 * Styles for AccordionItem
 * @public
 */
export const accordionItemStyles: (
  context: ElementDefinitionContext,
  definition: AccordionItemOptions,
) => ElementStyles = (context: ElementDefinitionContext, definition: AccordionItemOptions) =>
  css`
    ${styles(context, definition)}
    [part=heading] {
      display: flex;
      background-color: ${neutralLayer3};
    }
    [part='icon'] {
      order: 1;
      width: 40px;
    }
    [part='start'] {
      order: 2;
    }
    [part='button'] {
      order: 3;
      flex-grow: 1;
    }
    [part='end'] {
      order: 4;
    }
    :host slot[name='collapsed-icon'],
    :host([expanded]) slot[name='expanded-icon'] {
      fill: ${accentForegroundRest};
    }
  `;
