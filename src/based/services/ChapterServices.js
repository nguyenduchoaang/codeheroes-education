import BaseServices from "./BaseServices";

const ChapterServices = {
  GetDetailsChapterById: async (id) => {
    return await BaseServices.Get(`/chapters/${id}/`);
  },
};

export default ChapterServices;
