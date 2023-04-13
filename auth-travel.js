class auth {
  user;
  password;

  async auth(id) {
    let token = await fetch("", {
      method: "POST",
      body: JSON.parse({
        user: this.user,
        password: this.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    token = (await token.json()).token;

    const url = `https://travelnetwork.grupoctg.com/otra/iframe/${token}`;

    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", url);

    const div = document.getElementById(id);
    div.appendChild(ifrm);
  }
}
