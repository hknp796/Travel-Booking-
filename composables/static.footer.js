const pageLinks = [
  { id: 0, page: "FAQ", to: "#" },
  { id: 1, page: "Support", to: "#" },
  { id: 2, page: "Contact", to: "#" },
];

const socialLinks = [
  { id: 0, icon: "jam:facebook-circle", to: "#" },
  { id: 1, icon: "jam:instagram", to: "#" },
  { id: 2, icon: "jam:linkedin", to: "#" },
  { id: 3, icon: "jam:twitter", to: "#" },
  { id: 4, icon: "jam:youtube", to: "#" },
];

export const useFooter = () =>
  useState("footer", () => {
    return { socialLinks, pageLinks };
  });
