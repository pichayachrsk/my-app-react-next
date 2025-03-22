This is a demo reusable `TagInput` component that allows users to enter and manage  multiple tags.  This component should be well-structured, flexible, and properly documented.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

How to use TagInput component

- First, You can find TagInput component inside src/components folder.
- This component will render tag element after user enter the text with separator character.
- The default separator character is comma `,`.
- This component can filter duplicated tag name.
- The maximum of tag list is `5`.
- User able to custom the separator character in the input box(below `TagInput` element in render page) and it will pass props `separatorCharacter` to `TagInput` component