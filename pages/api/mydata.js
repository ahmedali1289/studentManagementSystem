import connect from "./utils/db";
import User from "./utils/userschema";

connect();

export default async function handler(req, res) {
    const { token } = req.body;
    const user = await User.findOne({ token });
    if (!user) {
        return res.status(400).json({ status: "Invalid token." });
    }

    const { name, email, role } = user;
    let routes;
    if (role === 'student') {
        routes = [
            { name: "Home", url: "/" },
            { name: "About", url: "/About" },
            { name: "Page1", url: "/Page1" }
        ];
    } else if (role === 'teacher') {
        routes = [
            { name: "Home", url: "/" },
            { name: "About", url: "/About" },
            { name: "Page2", url: "/Page2" }
        ];
    } else {
        routes = [
            { name: "Home", url: "/" },
            { name: "About", url: "/About" },
            { name: "Students", url: "/students/Students" },
            { name: "Teachers", url: "/teachers/Teachers" }
        ];
    }

    res.json({ name, email, role, routes });
}
