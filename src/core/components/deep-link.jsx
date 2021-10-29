import React from "react"
import PropTypes from "prop-types"
import setTranslate from "../plugins/deep-linking"

export const DeepLink = ({ enabled, path, text }) => {
    return (
        <a className="nostyle"
          onClick={enabled ? (e) => e.preventDefault() : null}
          href={enabled ? `#/${path}` : null}>
          <span>{setTranslate(text)}</span>
        </a>
    )
}
DeepLink.propTypes = {
  enabled: PropTypes.bool,
  isShown: PropTypes.bool,
  path: PropTypes.string,
  text: PropTypes.string
}

export default DeepLink
