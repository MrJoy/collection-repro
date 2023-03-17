console.log("controllers/application/1:", window, window.Stimulus)
import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"

console.log("controllers/application/2:", window, window.Stimulus, window.Avo)

// N.B. the following _does_ eliminate the error, but it feels wrong.
// if (window.Avo === undefined) {
//   Rails.start()
// }
Rails.start()

const application = Application.start()

application.handleError = (error, message, detail) => {
  console.warn(error, message, detail)
}

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
