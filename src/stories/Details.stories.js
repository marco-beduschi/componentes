import '../css/components/details.css'

export default {
  title: 'Components/Details',
  render: (args) => {
    return `
        <details class="details">
          <summary>${args.summary || 'Details'}</summary>
          ${args.content || 'Testing details'}
        </details>
      `;
  },
  argTypes: {
    summary: { control: 'text' },
    content: { control: 'text' },
  },
};

export const Default = {
  args: {
    summary: 'Details',
    content: 'Testing details',
  },
};

export const CustomContent = {
  args: {
    summary: 'Click to expand',
    content: 'This is some custom content inside the details element.',
  },
};