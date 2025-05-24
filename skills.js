async function skills() {
    let fetchapi = await fetch("data.json");
    let data = await fetchapi.json();
    fe = data.skills.frontend
    for (let i = 0; i < fe.length; i++) {
        return fe[i].skill
    }
}
skills()