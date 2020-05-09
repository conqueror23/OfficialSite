import CMS from "netlify-cms"

import Asia from "../../templates/acyasia/Common"
import Indo from "../../templates/acyindo/Common"
import Security from "../../templates/acysecurities/Common"

CMS.registerPreviewTemplate("asia", Asia)
CMS.registerPreviewTemplate("indo", Indo)
CMS.registerPreviewTemplate("security", Security)
