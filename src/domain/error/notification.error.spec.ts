import { NotificationError } from "./notification.error";

describe("Notification Error", () => {
  it("should instantiate", () => {
    const notificationError = new NotificationError("any_name");
    expect(notificationError).toBeTruthy();
  });

  it("should throw with instantiate name", () => {
    const notificationError = new NotificationError("any_name");
    notificationError.add("any_error", "any_property_name");
    const publishedErrors = () => notificationError.publish();
    expect(publishedErrors).toThrowError("any_name");
  });

  it("should add and publish one error", () => {
    const notificationError = new NotificationError("any_name");
    notificationError.add("any_error", "any_property_name");
    try {
      notificationError.publish();
    } catch (error) {
      expect(error).toMatchObject({
        message: "any_name",
        errors: [{ message: "any_error", propertyName: "any_property_name" }],
      });
    }
  });

  it("should add and publish one or more errors", () => {
    const notificationError = new NotificationError("any_name");
    notificationError
      .add("any_error1", "any_property_name1")
      .add("any_error2", "any_property_name2")
      .add("any_error3", "any_property_name3");

    try {
      notificationError.publish();
    } catch (error) {
      expect(error).toMatchObject({
        message: "any_name",
        errors: [
          { message: "any_error1", propertyName: "any_property_name1" },
          { message: "any_error2", propertyName: "any_property_name2" },
          { message: "any_error3", propertyName: "any_property_name3" },
        ],
      });
    }
  });
});
