const fakeUser = {
  username: "bnbnac",
  loggedIn: true,
};

export const trending = (req, res) => {
  const videos = [1, 2, 3, 4, 5];
  res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("search video");
export const remove = (req, res) => res.send("remove video " + req.params.id);
export const upload = (req, res) => res.send("upload video");
