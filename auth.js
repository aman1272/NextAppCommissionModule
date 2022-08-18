// const express = require("express");
// const jwt = require("jsonwebtoken");
// const url = require("url");
// const PORT = process.env.PORT || 3535;
// const METABASE_URL = process.env.METABASE_URL || "http://localhost:3000";
// const METABASE_JWT_SHARED_SECRET =
//   process.env.METABASE_JWT_SHARED_SECRET ||
//   "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
//   "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

// // This matches a user in the Sample Dataset
// const DEMO_USER = {
//     username: "aman@1234",
//     password: "1234@",
// };
// const signUserToken = user =>
// jwtSign({


//     username: username,
//     password: password,
// },
//     secret
// );
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.get("/api/config", (req, res) => res.json({ METABASE_URL }));
// app.get("/api/auth/metabase", (req, res) => {
//   // NOTE: in a real application you would use the embedding application's session to determine which user to use here.
//   // If no session exists you would need to show an error or redirect to the embedding application's login page.
//   const user = DEMO_USER;
//   res.redirect(
//     url.format({
//       pathname: `${METABASE_URL}/https://ensuredit.metabaseapp.com/`,
//       query: {
//         jwt: signUserToken(user),
//         return_to: req.query.return_to
//       }
//     })
//   );
// });
// // PRODUCTION
// app.use(express.static(__dirname + "/build"));
// app.get("/*", (req, res) => res.sendFile(__dirname + "/build/index.html"));
// app.listen(PORT, () => {
//   console.log("Listening on port " + PORT);
// });



import { jwtSign } from 'jwt-next-auth';
import { serialize } from 'cookie'
const secret = process.env.SECRET;
export default async function (req, res) {
    console.log('apidata', req.body);
    const { username, password } = req.body
    if (username === 'aman@1234' && password === '1234@') {
        const token = jwtSign({


            username: username,
            password: password,
        },
            secret
        )
        const serialised = serialize("OursiteJWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'developement',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30,
            path: "/Layouts/CommissionModule"
        })
        res.setHeader('Set-Cookie', serialised)
        res.status(200).json({ message: "Success" })
    } else {
        res.json({ message: 'Invalid Userame and Password' })
    }
}

