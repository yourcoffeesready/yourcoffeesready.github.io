const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (HTML, CSS, JS, images) from the project root
app.use(express.static(__dirname));

// Fallback to index.html for unknown routes (optional for simple sites)
app.get("*", (req, res) => {
    const requested = req.path;
    const allowedPages = ["/", "/index.html", "/about.html", "/menu.html", "/contact.html"];

    if (allowedPages.includes(requested)) {
        res.sendFile(path.join(__dirname, requested === "/" ? "index.html" : requested));
    } else {
        res.status(404).send("Page not found");
    }
});

app.listen(PORT, () => {
    console.log(`Your Coffees Ready site is running at http://localhost:${PORT}`);
});
