export const bootstrapLabelClasses = [
  "label-default",
  "label-primary",
  "label-info",
  "label-danger",
  "label-success",
  "label-warning"
];

export const handleAos = (
    actionType = "zoom-in",
    delay = "0",
    duration = "500",
    offset = "0",
  ) => {
    return {
      "data-aos": actionType,
      "data-aos-delay": delay.toString(),
      "data-aos-duration": duration.toString(),
      "data-aos-offset": offset.toString(),
      "data-aos-easing": "ease-in-out",
      "data-aos-mirror": "true",
      "data-aos-once": "false",
      "data-aos-anchor-placement": "top-center"
    }
  }