// ReOpen The Interface And Use Cases
// Create an object 'userSettings' that adheres to the merged 'Settings' interface
var userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};
// 1- Interface Declaration: We start by defining an initial interface called Settings for the
//    Homepage, which includes properties like theme and font. The theme property is read-only.
// 2- Interface Reopening - Articles Page: We reopen the Settings interface to add a sidebar
//    property specific to the Articles Page. This demonstrates how interfaces can be extended
//    as different parts of the application require additional properties.
// 3- Interface Reopening - Contact Page: The Settings interface is reopened again, this time for
//    the Contact Page, where an external property is introduced, tailored to that section.
// 4- Object Creation: We create an object named userSettings that complies with the merged Settings
//    interface, including properties from all the interface declarations: theme, font, sidebar, and
//    external. This object represents user settings, incorporating attributes from different parts
//    of a website.
// Use Cases:
// - Modular Development: Interface reopening enables modular development, allowing different parts
//   of a project to contribute to interface definitions. Each section focuses on its specific
//   properties, promoting code organization.
// - Progressive Enhancement: As your application evolves, you can extend interfaces to accommodate
//   new features or settings. This incremental approach ensures backward compatibility and code
//   flexibility.
// - Clear Separation of Concerns: Interface reopening maintains a clear separation of concerns
//   between different sections or modules of your application while ensuring consistent data structures.
