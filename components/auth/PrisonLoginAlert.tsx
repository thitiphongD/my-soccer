"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Lock, X, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PrisonLoginAlertProps {
  prisonInfo: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any
    warning: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expiry: any
    isManualRestriction: boolean
    type: "error" | "warning"
  }
  onClose: () => void
}

export function PrisonLoginAlert({ prisonInfo, onClose }: PrisonLoginAlertProps) {
  const { user, warning, expiry, isManualRestriction, type } = prisonInfo

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`p-6 rounded-t-xl ${type === "error" ? "bg-red-500" : "bg-orange-500"}`}>
          <div className="flex items-center gap-3 text-white">
            {type === "error" ? (
              <Shield className="h-8 w-8 flex-shrink-0" />
            ) : (
              <AlertTriangle className="h-8 w-8 flex-shrink-0" />
            )}
            <div className="flex-1">
              <h2 className="text-xl font-bold">🚫 Login Blocked</h2>
              <p className="text-sm opacity-90">Account in Prison Rank</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20 flex-shrink-0">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* User Info */}
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <Lock className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-xs text-gray-500">
                  Current Likes:{" "}
                  <span className={user.totalLikes <= 0 ? "text-red-600 font-medium" : ""}>{user.totalLikes}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Prison Status */}
          <Alert
            className={`border-2 ${type === "error" ? "border-red-200 bg-red-50" : "border-orange-200 bg-orange-50"}`}
          >
            <AlertDescription className={`${type === "error" ? "text-red-800" : "text-orange-800"}`}>
              <div className="space-y-3">
                <p className="font-medium text-base">{warning}</p>

                {/* Expiry Information */}
                {expiry.hasExpiry && (
                  <div
                    className={`p-3 rounded-lg border ${type === "error" ? "bg-red-100 border-red-200" : "bg-orange-100 border-orange-200"}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">⏰</span>
                      <div>
                        {expiry.isExpired ? (
                          <p className="font-semibold text-green-700">Restriction has expired!</p>
                        ) : (
                          <>
                            <p className="font-semibold">Release Date: {expiry.date}</p>
                            {expiry.daysLeft !== undefined && (
                              <p className="text-sm">
                                {expiry.daysLeft > 0
                                  ? `${expiry.daysLeft} days remaining`
                                  : "Less than 1 day remaining"}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* How to Escape (for automatic prison) */}
                {!isManualRestriction && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">💡</span>
                      <div>
                        <p className="font-semibold text-blue-800 mb-2">How to escape prison:</p>
                        <div className="text-sm text-blue-700 space-y-1">
                          {user.totalLikes < 0 ? (
                            <>
                              <p>
                                • You need <strong>{Math.abs(user.totalLikes) + 1} more likes</strong> to escape prison
                              </p>
                              <p>• Ask friends to like your existing posts and comments</p>
                              <p>• Once you get enough likes, you can log in again</p>
                            </>
                          ) : (
                            <>
                              <p>
                                • You need <strong>at least 1 like</strong> to escape prison
                              </p>
                              <p>• Ask someone to like your posts or comments</p>
                              <p>• Engage positively with the community</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Admin (for manual restrictions) */}
                {isManualRestriction && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-gray-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Need help?</p>
                        <div className="text-sm text-gray-700 space-y-1">
                          <p>• Contact administrators if you believe this restriction is incorrect</p>
                          <p>• If your restriction period has expired, please report this issue</p>
                          <p>• Appeals can be submitted through the support system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AlertDescription>
          </Alert>

          {/* Important Notice */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Important Notice</p>
                <p className="text-sm text-gray-700">
                  You cannot access your account while in prison rank.
                  {!isManualRestriction && " Improve your community standing to regain access."}
                  {isManualRestriction && " Contact support for assistance."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 rounded-b-xl border-t">
          <Button onClick={onClose} className="w-full" variant={type === "error" ? "destructive" : "default"} size="lg">
            {type === "error" ? "🔒 Close - Cannot Login" : "⚠️ Close - Cannot Login"}
          </Button>
        </div>
      </div>
    </div>
  )
}
