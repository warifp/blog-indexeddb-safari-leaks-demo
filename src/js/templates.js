import { render } from 'Mustache'
import tippy from 'tippy.js'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';

export const GOOGLE_TOOLTIP_TEXT = `The Google User ID is an internal identifier generated by Google. It uniquely 
identifies a single Google account. It can be used with Google APIs to fetch public personal information of the 
account owner. The information exposed by these APIs is controlled by many factors. In general, however, the user's
profile picture is typically available.`

export const TEMPLATE = {
  SHOW_TERMS: 'show-terms',
  SUPPORTED_WEBSITES: 'supported-website-links',
  UNSUPPORTED_BROWSER: 'unsupported-browser',
  SUPPORTED_BROWSER: 'supported-browser',
  GOOGLE_IDS: 'google-ids',
  GOOGLE_PHOTOS: 'google-photos',
}

export const HTML = {
  TERMS: 'terms',
  ACCEPT_TERMS: 'accept-terms',
  CONTENT_SECTIONS: 'content-sections',
  SUPPORTED_WEBSITES: 'supported-websites',
  GOOGLE_RESULT: 'google-result',
  FETCH_GOOGLE_RESULT: 'fetch-google-id',
  NO_LEAKS_REFRESH: 'no-leaks-refresh',
  DATABASES_TOOLTIP: 'databases-tooltip',
  GOOGLE_TOOLTIP: 'google-tooltip',
}

export function appendSection(identifier, view) {
  const section = document.getElementById(identifier).cloneNode(true)
  const parent = document.getElementById(HTML.CONTENT_SECTIONS)
  if (view) {
    parent.insertAdjacentHTML('beforeend', render(section.innerHTML, view))
  } else {
    parent.appendChild(section.content)
  }
}

export function replaceSection(identifier, view, existing) {
  const section = document.getElementById(identifier).cloneNode(true)
  document.getElementById(existing).outerHTML = render(section.innerHTML, view)
}

export function createTooltip(identifier, content) {
    tippy(`#${identifier}`, {
        content: content,
        theme: 'light',
        interactive: true,
    })
}