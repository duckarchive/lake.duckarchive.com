import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
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
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              const isoDate = new Date().toISOString().split("T")[0];
              return values?.slug || isoDate
            },
          },
        },
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
              component: "select",
            },
            options: ["Посібники", "Качині Історії", "Сучасне", "Історичне", "Інше"],
          },
          {
            type: "string",
            name: "tags",
            label: "Теги",
            required: true,
            list: true,
            ui: {
              validate: (value) => {
                if (!value || !value.length) {
                  return "Додайте хоча б один тег";
                } else if (value?.length > 5) {
                  return "Максимум 5 тегів";
                };
              },
              component: "tags",
            },
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Дата Публікації",
            required: true,
            ui: {
              dateFormat: 'YYYY-MM-DD',
              parse: (value) => value && (value as any).format('YYYY-MM-DD'),
            },
          },
          {
            type: "image",
            name: "cover",
            label: "Головне зображення",
            required: true,
            ui: {
              parse: (src) => {
                if (src?.startsWith("https://assets.tina.io")) {
                  console.log("parse-domain", src);
                  return src?.replace(/.+\//, "../../assets/images/");
                } else {
                  console.log("parse-else", src);
                  return src?.replace("/../src/assets", "../../assets")
                }
              },
              format: (src) => {
                if (src?.startsWith("https://assets.tina.io")) {
                  console.log("format-domain", src);
                  return src?.replace("../../assets/images", "");
                } else {
                  console.log("format-else", src);
                  return src?.replace("../../assets", "/../src/assets")
                }
              },
            },
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
            type: "string",
            name: "body",
            label: "Текст статті",
            isBody: true,
            required: true,
            ui: {
              component: "textarea"
            },
          },
        ],
      },
    ],
  },
});
