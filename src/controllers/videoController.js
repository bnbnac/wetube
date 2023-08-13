export const trending = (req, res) => res.send("homepage videos");
export const see = (req, res) => res.send("see video " + req.params.id);
export const edit = (req, res) => res.send("edit video " + req.params.id);
export const search = (req, res) => res.send("search video");
export const remove = (req, res) => res.send("remove video " + req.params.id);
export const upload = (req, res) => res.send("upload video");
