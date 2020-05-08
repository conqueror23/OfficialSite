import CMS from "netlify-cms-app"

import Asia from "../../templates/acyasia/Common"
import Indo from "../../templates/acyindo/Common"
import Security from "../../templates/acysecurities/Common"

CMS.registerPreviewTemplate("asia", Asia)
CMS.registerPreviewTemplate("indo", Indo)
CMS.registerPreviewTemplate("security", Security)
