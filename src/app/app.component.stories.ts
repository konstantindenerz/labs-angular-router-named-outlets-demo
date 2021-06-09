import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {AppRoutingModule} from "./app-routing.module";

export default {
  title: 'App / Root Component',
  component: AppComponent,
  decorators: [
    moduleMetadata({imports: [AppModule]}),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
