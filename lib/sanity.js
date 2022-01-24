import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "rjgrnjak",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk47hzPFvvbk0zzQtPbQypunuGABSoO1EUsk8jfwQ5c8yPe3KOH5r8mxXxQWcOa4JE7AW5L8O1PNDgOUMmVUDIlLhKaBY5xBeDuARwJN3rRcDYGOSDkcH1bUyEXeYFT8naBmRYjmlvGvePuZl2zI3p3d6wpzlvslCBNiyROz00Qt9kXvesEH",
  useCdn: false,
});
