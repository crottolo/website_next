"use client";

import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, User, Globe, Server, Clock, Shield, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { clearSession } from '@/lib/odooService';

const Dashboard = () => {
  const { user, error, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      const handleConnectionError = async () => {
        try {
          // Pulisci la sessione
          await clearSession();
          // Resetta lo stato dell'utente
          setUser(null);
          // Reindirizza al login
          router.push("/signin");
        } catch (err) {
          console.error("Error handling connection error:", err);
        }
      };

      handleConnectionError();
    }
  }, [error, setUser, router]);



  // Se non c'è user o c'è un errore, mostriamo l'errore
  if (!user || error) {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">User</h1>
            <p className="text-gray-500">No connection to server</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8 bg-destructive/10 rounded-lg border border-destructive/20">
          <AlertCircle className="h-16 w-16 text-destructive mb-4" />
          <h2 className="text-xl font-semibold text-destructive mb-2">Connection Error</h2>
          <p className="text-center text-muted-foreground">
            Unable to connect to Odoo server. Please check your connection and try again.
          </p>
          {error && (
            <p className="text-sm text-muted-foreground mt-2">
              Error: {error}
            </p>
          )}
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={async () => {
              await clearSession();
              setUser(null);
              router.push("/signin");
            }}
          >
            Return to Login
          </Button>
        </div>
      </div>
    );
  }

  // Se abbiamo l'user, mostriamo la dashboard normale
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center mb-8">
        <div className="flex items-center gap-4">
          {user.image_url && (
            <Image
              src={user.image_url}
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.partner_display_name}</p>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Information Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">User Information</CardTitle>
            <User className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Username</dt>
                <dd className="text-sm">{user?.username}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">User ID</dt>
                <dd className="text-sm">{user?.id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Partner ID</dt>
                <dd className="text-sm">{user?.partner_id}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Company Information</CardTitle>
            <Building className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Current Company</dt>
                <dd className="text-sm">
                  {user?.user_companies?.allowed_companies[user?.user_companies?.current_company]?.name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Company ID</dt>
                <dd className="text-sm">{user?.company_id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Multi-Company</dt>
                <dd className="text-sm">{user?.display_switch_company_menu ? "Enabled" : "Disabled"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">System Information</CardTitle>
            <Server className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Database</dt>
                <dd className="text-sm">{user?.db}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Server Version</dt>
                <dd className="text-sm">{user?.server_version}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Base URL</dt>
                <dd className="text-sm break-all">{user?.["web.base.url"]}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* Localization Settings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Localization Settings</CardTitle>
            <Globe className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Language</dt>
                <dd className="text-sm">{user?.user_context?.lang}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Timezone</dt>
                <dd className="text-sm">{user?.user_context?.tz}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Currency</dt>
                <dd className="text-sm">
                  {user?.currencies && Object.values(user.currencies)[0]?.symbol} 
                  ({user?.currencies && Object.values(user.currencies)[0]?.position})
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* System Limits */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">System Limits</CardTitle>
            <Clock className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Max File Upload Size</dt>
                <dd className="text-sm">
                  {user?.max_file_upload_size 
                    ? `${(user.max_file_upload_size / (1024 * 1024)).toFixed(0)} MB` 
                    : 'N/A'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Active IDs Limit</dt>
                <dd className="text-sm">
                  {user?.active_ids_limit?.toLocaleString() ?? 'N/A'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Max Time Between Keys</dt>
                <dd className="text-sm">
                  {user?.max_time_between_keys_in_ms 
                    ? `${user.max_time_between_keys_in_ms} ms` 
                    : 'N/A'}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* Permissions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Permissions</CardTitle>
            <Shield className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">System User</dt>
                <dd className="text-sm">{user?.is_system ? "Yes" : "No"}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Administrator</dt>
                <dd className="text-sm">{user?.is_admin ? "Yes" : "No"}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Notification Type</dt>
                <dd className="text-sm capitalize">{user?.notification_type}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;