import Video from "../models/Video";

const fakeUser = {
  username: "bnbnac",
  loggedIn: true,
};

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", fakeUser, videos });
  } catch (e) {
    return console.log("errors", e);
  }
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    video: [],
    pageTitle: `Watching: {video.title}`,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { video: [], pageTitle: `Editing: {video.title}` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // change the title in the (real)database here

  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("search video");
export const remove = (req, res) => res.send("remove video " + req.params.id);
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    const video = new Video({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    await video.save();
    return res.redirect("/");
  } catch (e) {
    console.log(e);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: e._message,
    });
  }
};
