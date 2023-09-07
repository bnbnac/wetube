const fakeUser = {
  username: "bnbnac",
  loggedIn: true,
};

let videosOnFakeDB = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser, videosOnFakeDB });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videosOnFakeDB[id - 1];
  res.render("watch", { video, pageTitle: `Watching: ${video.title}` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videosOnFakeDB[id - 1];
  res.render("edit", { video, pageTitle: `Editing: ${video.title}` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // change the title in the (real)database here
  videosOnFakeDB[id - 1].title = title;

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
