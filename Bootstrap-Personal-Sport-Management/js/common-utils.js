/**
 * Created by duanzhengmou on 10/14/16.
 */

/**
 * generate my own footer by default
 * @returns {Element}
 */
function generate_footer() {

    var container = document.createElement("div");
    var author = document.createElement("div");
    var copyright = document.createElement("div");

    author.style.marginLeft = "auto";
    author.style.marginRight = "auto";
    author.style.display = "table";

    copyright.style.marginLeft = "auto";
    copyright.style.marginRight = "auto";
    copyright.style.display = "table";

    author.appendChild(document.createTextNode("Made with ❤️ by Toast @"));
    var git_address = document.createElement("a");
    git_address.href="https://github.com/toastsgithub";
    git_address.innerHTML = "Github";
    author.appendChild(git_address);

    copyright.appendChild(document.createTextNode("Copyright © 2016 Toast"));

    container.appendChild(author);
    container.appendChild(copyright);

    return container;
}