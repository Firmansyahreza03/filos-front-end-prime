export interface InsertProfileReq {
  isActive?: boolean

  userEmail?: string
  userPassword?: string
  fullName?: string
  companyName?: string
  positionName?: string
  industryId?: string
  verificationCode?: string

  fileName?: string
  fileExt?: string
}
