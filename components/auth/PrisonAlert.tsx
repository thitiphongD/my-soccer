"use client";

import {
  isPrisonUser,
  getPrisonWarning,
  getPrisonExpiry,
} from "@/lib/prison-ranks";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Lock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuthProvider } from "@/providers/AuthProvider";

export function PrisonAlert() {
  const { user } = useAuthProvider();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownAlert, setHasShownAlert] = useState(false);

  useEffect(() => {
    if (
      user &&
      (isPrisonUser(user.id) || user.totalLikes <= 0) &&
      !hasShownAlert
    ) {
      setIsVisible(true);
      setHasShownAlert(true);
    }
  }, [user, hasShownAlert]);

  if (!user || (!isPrisonUser(user.id) && user.totalLikes > 0) || !isVisible) {
    return null;
  }

  const warning = getPrisonWarning(user);
  const expiry = getPrisonExpiry(user);
  const isManualRestriction = isPrisonUser(user.id);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <Alert
        className={`max-w-4xl mx-auto ${
          isManualRestriction
            ? "border-red-500 bg-red-50"
            : "border-orange-500 bg-orange-50"
        }`}
      >
        <div className="flex items-start gap-3">
          {isManualRestriction ? (
            <Lock className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
          )}

          <div className="flex-1 min-w-0">
            <div
              className={`font-semibold text-sm ${
                isManualRestriction ? "text-red-800" : "text-orange-800"
              }`}
            >
              🔒 Your account is in Prison Rank
            </div>

            <AlertDescription
              className={`mt-1 text-sm ${
                isManualRestriction ? "text-red-700" : "text-orange-700"
              }`}
            >
              <div className="space-y-2">
                <p>{warning}</p>

                {expiry.hasExpiry && (
                  <div
                    className={`p-2 rounded ${
                      isManualRestriction ? "bg-red-100" : "bg-orange-100"
                    }`}
                  >
                    <p className="font-medium">
                      ⏰{" "}
                      {expiry.isExpired
                        ? "Restriction has expired!"
                        : `Release Date: ${expiry.date}`}
                    </p>
                    {!expiry.isExpired && expiry.daysLeft !== undefined && (
                      <p className="text-xs mt-1">
                        {expiry.daysLeft > 0
                          ? `${expiry.daysLeft} days remaining`
                          : "Less than 1 day remaining"}
                      </p>
                    )}
                  </div>
                )}

                {!isManualRestriction && (
                  <div className="text-xs">
                    💡 <strong>How to escape prison:</strong>{" "}
                    {user.totalLikes <= 0
                      ? `Get ${
                          Math.abs(user.totalLikes) + 1
                        } more likes on your posts and comments`
                      : "Engage positively with the community"}
                  </div>
                )}

                {isManualRestriction && (
                  <div className="text-xs">
                    📧 <strong>Need help?</strong> Contact administrators if you
                    believe this restriction is incorrect.
                  </div>
                )}
              </div>
            </AlertDescription>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className={`flex-shrink-0 ${
              isManualRestriction ? "hover:bg-red-100" : "hover:bg-orange-100"
            }`}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Alert>
    </div>
  );
}
