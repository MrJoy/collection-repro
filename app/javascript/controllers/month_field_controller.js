import { Controller } from '@hotwired/stimulus'
import { DateTime } from 'luxon'
import flatpickr from 'flatpickr'
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index.js'

import 'flatpickr/dist/plugins/monthSelect/style.css'

// Get the DateTime with the TZ offset applied.
function universalTimestamp(timestampStr) {
  return new Date(new Date(timestampStr).getTime() + (new Date(timestampStr).getTimezoneOffset() * 60 * 1000))
}

const RAW_DATE_FORMAT = 'y/LL/dd'

export default class extends Controller {
  static targets = ['input', 'fakeInput']

  static values = {
    view: String,
    timezone: String,
    format: String,
    pickerFormat: String,
    disableMobile: Boolean,
    relative: Boolean,
    fieldType: { type: String, default: 'date' },
    pickerOptions: { type: Object, default: {} },
  }

  flatpickrInstance;

  cachedInitialValue;

  get browserZone() {
    const time = DateTime.local()

    return time.zoneName
  }

  get initialValue() {
    if (this.isOnShow || this.isOnIndex) {
      return this.context.element.innerText
    } if (this.isOnEdit) {
      return this.inputTarget.value
    }

    return null
  }

  get isOnIndex() {
    return this.viewValue === 'index'
  }

  get isOnEdit() {
    return this.viewValue === 'edit'
  }

  get isOnShow() {
    return this.viewValue === 'show'
  }

  // Parse the time as if it were UTC
  get parsedValue() {
    return DateTime.fromISO(this.initialValue, { zone: 'UTC' })
  }

  connect() {
    // Cache the initial value so we can fill it back on disconnection.
    // We do that so the JS parser will continue to work when the user hits the back button to return on this page.
    this.cacheInitialValue()

    if (this.isOnShow || this.isOnIndex) {
      this.initShow()
    } else if (this.isOnEdit) {
      this.initEdit()
    }
  }

  disconnect() {
    if (this.isOnShow || this.isOnIndex) {
      this.context.element.innerText = this.cachedInitialValue
    } else if (this.isOnEdit) {
      if (this.flatpickrInstance) this.flatpickrInstance.destroy()
    }
  }

  cacheInitialValue() {
    this.cachedInitialValue = this.initialValue
  }

  // Turns the value in the controller wrapper into the timezone of the browser
  initShow() {
    let value = this.parsedValue

    this.context.element.innerText = value.toFormat(this.formatValue)
  }

  initEdit() {
    const options = {
      altInput: true,
      onChange: this.onChange.bind(this),
      ...this.pickerOptionsValue,
      plugins: [new monthSelectPlugin({
        altFormat: this.pickerFormatValue,
      })],
      noCalendar: false,
      enableTime: false,
      enableSeconds: false,
      locale: {
        firstDayOfWeek: 0,
      },
    }

    // Set the format of the displayed input field.
    options.altFormat = this.pickerFormatValue

    // Disable native input in mobile browsers
    options.disableMobile = this.disableMobileValue

    if (this.initialValue) {
      options.defaultDate = universalTimestamp(this.initialValue)
    }

    this.flatpickrInstance = flatpickr(this.fakeInputTarget, options)

    // Don't try to parse the value if the input is empty.
    if (!this.initialValue) {
      return
    }

    let value = DateTime.fromJSDate(universalTimestamp(this.initialValue)).toFormat(RAW_DATE_FORMAT)

    this.updateRealInput(value)
  }

  onChange(selectedDates) {
    // No date has been selected
    if (selectedDates.length === 0) {
      this.updateRealInput('')

      return
    }

    let value = DateTime.fromISO(selectedDates[0].toISOString()).setZone('UTC', { keepLocalTime: true }).toFormat(RAW_DATE_FORMAT)

    this.updateRealInput(value)
  }

  // Value should be a string
  updateRealInput(value) {
    this.inputTarget.value = value
  }
}
