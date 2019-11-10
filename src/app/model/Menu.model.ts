export class Menu {
  public static menu: Array<any> = [
    {
      admin: [
        { label: "DashBoard", key: "admindash" },
        { label: "AddEmployee", key: "addemp" },
        { label: "ShowEmployee", key: "showemp" }
      ],
      manager: [
        { label: "DashBoard", key: "managerdash" },
        { label: "ShowEmployee", key: "showemp" }
      ],
      user: [{ label: "DashBoard", key: "userdash" }]
    }
  ];
}
