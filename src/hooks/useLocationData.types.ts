enum StorageVariableKey {
  BrandName = "BrandName",
  StoreHours = "StoreHours",
  Name = "Name",
  Address = "Address",
  PhoneNumber = "PhoneNumber",
}

export interface StorageVariable {
  id: number;
  orgId: number;
  locationId: number | null;
  key: StorageVariableKey;
  value: string;
}

export interface StorageLocation {
  id: number;
  orgId: number;
  Address: string;
  BrandName: string;
  Name: string;
  PhoneNumber: string;
  StoreHours: string;
}

export type OrgVariables = {
  [orgId: number]: Partial<Record<StorageVariableKey, string>>;
};

export type LocationVariables = {
  [locationId: number]: Partial<Record<StorageVariableKey, string>>;
};

export type useLocationDataReturnType = {
  locationData: StorageLocation[];
  loading?: boolean;
  error?: Error;
};
