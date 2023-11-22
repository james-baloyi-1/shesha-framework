import React from 'react';
import { Story, Meta } from '@storybook/react';
import StoryApp from '../../components/storyBookApp';
import DesignerPage, { IDesignerPageProps } from './';
import { addStory } from '../../stories/utils';
import { MainLayout } from '../..';

export default {
  title: 'Pages/Designer',
  component: DesignerPage,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IDesignerPageProps> = (args) => (
  <StoryApp>
    <MainLayout>
      <DesignerPage {...args} />
    </MainLayout>
  </StoryApp>
);

// Reuse that template for creating different stories
export const Basic = Template.bind({});

export const EpmDesignerUserManagement = addStory(Template, {
  formId: 'd1d69771-07ec-46e0-9710-0c840295ecd2',
});

export const EpmPlayGround = addStory(Template, {
  formId: 'e8c7aec8-e90e-4729-a2b8-49f6d7ac01e3',
});

export const EpmPlayGroundTwo = addStory(Template, {
  formId: 'daa6108f-86c2-49b0-88f9-f18badd673f2',
});

export const FncDesignerTSchoolDetails = addStory(Template, {
  formId: '9da17eae-3099-4835-b196-200bfb955ae7',
});

export const FncDesignerTestDetails = addStory(Template, {
  formId: 'e41926d1-0fe1-476d-804a-0b692cb8153d',
});

export const FncDesignerTextComponentDetails = addStory(Template, {
  formId: 'd5e910a8-3f5b-4a96-9e7d-5142e14965f1',
});

export const FncDesignerBooksTable = addStory(Template, {
  formId: '2be1e350-078f-4d5c-aa76-5906a69af0bc',
});

export const FncDesignerAddMember = addStory(Template, {
  formId: '42a4135c-bd2d-4dba-bc2c-6bbd8bace7da',
});

export const FncDesignerMemberDetailsView = addStory(Template, {
  formId: 'c3b1d5f5-dcc6-4957-b45f-34bdc9f59d95',
});

export const FncDesignerMemberCreateView = addStory(Template, {
  formId: 'd69e9365-1121-4a45-bab2-e93f5d67f8b6',
});

export const FncDesignerDeployCreate = addStory(Template, {
  formId: '3c2dd65f-5b03-4db5-9a3a-64dc850c7e14',
});

export const DepDesignerCaseDetails = addStory(Template, {
  formId: 'c6eb30fa-030e-4504-8247-64255377176b',
});

export const EntprDesignerTimeField = addStory(Template, {
  formId: 'adbfb402-07d1-4ff3-8cac-44acbe10ed50',
});
export const RefListStatus = addStory(Template, {
  formId: 'ecebf97c-cf1e-4e43-831e-91f0ceccaf06',
});
export const TimePicker = addStory(Template, {
  formId: '2799e06b-6595-4dd3-9f71-567d3555f80e',
});
