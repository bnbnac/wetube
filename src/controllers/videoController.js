import Video from "../models/Video";

const fakeUser = {
  username: "bnbnac",
  loggedIn: true,
};

export const home = (req, res) => {
  Video.find({})
    .then((videos) => {
      console.log("videos", videos);
      res.render("home", { pageTitle: "Home", fakeUser, videos });
    })
    .catch((e) => console.log("errors", e));
};
export const watch = (req, res) => {
  const { id } = req.params;
  res.render("watch", { video: [], pageTitle: `Watching: {video.title}` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  res.render("edit", { video: [], pageTitle: `Editing: {video.title}` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // change the title in the (real)database here

  res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("search video");
export const remove = (req, res) => res.send("remove video " + req.params.id);
export const getUpload = (req, res) => {
  res.render("upload", { videosOnFakeDB, pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  console.log(req.body);
  // do upload
  res.redirect("/");
};
