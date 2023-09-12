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

export const watch = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    if (!video) {
      return res.render("404", { pageTitle: "Video not found." });
    }
    return res.render("watch", {
      video,
      pageTitle: video.title,
    });
  } catch (e) {
    // info something to client
    console.log(e);
    return res.redirect("/");
  }
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("edit", { video, pageTitle: `Editing: ${video.title}` });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "video not found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags,
  });
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
      hashtags,
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
