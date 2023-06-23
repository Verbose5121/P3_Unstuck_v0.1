export type navItem = {
    label: string;
    href: string;
  };
  export const defaultNavItems:navItem[] = [
    {
      label: "Dashboard",
      href: "/", 
    },
    {
      label: "Stucks",
      href: "/Dashboard",

    },
    {
      label: "Profile",
      href: "/profile",

    },
    {
      label: "Signout",
      href: "/",

    },
  ];