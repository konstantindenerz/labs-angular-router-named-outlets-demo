import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {SiteSheetComponent} from './site-sheet.component';
import {SiteSheetModule} from './site-sheet.module';

export default {
  title: 'App / SiteSheet',
  component: SiteSheetComponent,
  decorators: [
    moduleMetadata({imports: [SiteSheetModule]}),
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story<SiteSheetComponent> = ({show}: SiteSheetComponent) => ({
  template: `<div style="height: 100vh">
    <labs-site-sheet [show]="show">
    content
</labs-site-sheet>
</div>`,
  props: {show},
});

export const Default = Template.bind({});
Default.args = {
  show: true
};
