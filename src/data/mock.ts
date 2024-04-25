
export type CapabilityArea = "brand" | "development" | "marketing";

export type Capability = {area: CapabilityArea, skill: string}

export const capabilityArray: Capability[] = [
    {area: "brand", skill: "Brand Strategy"},
    {area: "brand", skill: "Logo & Name"},
    {area: "brand", skill: "Identity & Collateral"},
    {area: "development", skill: "eCommerce"},
    {area: "development", skill: "Web Development"},
    {area: "development", skill: "Mobile Apps"},
    {area: "marketing", skill: "Digital"},
    {area: "marketing", skill: "Market Research"},
];

export const services = [... new Set(capabilityArray.map(c => c.area))];

export type NavLink = {
name: string;
url: string;
}
export const navLinks: NavLink[] = [
    {name: "Services", url: "/services"}, {name: "Work", url: "/work"}, {name: "About", url: "/about"}, {name: "Blog", url: "/blog"}, {name: "Contact", url: "/contact"}
];