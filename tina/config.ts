import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "../src/assets/images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Статті",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Заголовок",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "ID статті в посиланні",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Короткий опис",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Категорія",
            required: true,
            ui: {
              component: 'select',
            },
            options: ['Посібники', 'Качині Історії', 'Цікаве', 'Інше'],
          },
          {
            type: "string",
            name: "tags",
            label: "Теги",
            required: true,
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Дата Публікації",
            required: true,
          },
          {
            type: "image",
            name: "cover",
            label: "Головне зображення",
            required: true,
          },
          {
            type: "string",
            name: "coverAlt",
            label: "Опис головного зображення",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Автор",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Текст статті",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
});
