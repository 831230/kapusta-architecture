const passport = require("../config/passport");

const auth = passport.authenticate("jwt", { session: false });

module.exports = auth;

// ponizej to samo ale bardziej rozbudowane
// poleca sie to pierwsze

//const auth = (req, res, next) => {
//  passport.authenticate("jwt", { session: false }, (err, user) => {
//     if (!user || err) {
//       return res.status(401).json({
//         status: "error",
//         code: 401,
//         message: "Unauthorized",
//         data: "Unauthorized",
//       });
//     }
//     // ...
//  });
// };
