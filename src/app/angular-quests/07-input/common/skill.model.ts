export class Skill {
    public name: string;
    public logo: string;
    public site: string;
    public skill: Skill;

    constructor(name: string, logo: string, site: string) {
        this.name = name;
        this.logo = logo;
        this.site = site;
    }
}
