export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search video");
export const remove = (req, res) => res.send("remove video " + req.params.id);
export const upload = (req, res) => res.send("upload video");
