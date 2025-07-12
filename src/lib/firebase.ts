// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Optional: Analytics only if using in browser
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD_cV58RiDDuzepk_2R49I-xRbSaZenrY0",
  authDomain: "koinbx-3e66e.firebaseapp.com",
  projectId: "koinbx-3e66e",
  storageBucket: "koinbx-3e66e.appspot.com", // ✅ FIXED: was `firebasestorage.app` (incorrect)
  messagingSenderId: "149207407747",
  appId: "1:149207407747:web:b81c6bcb191bc5d1568fb6",
  measurementId: "G-GPLE3Z05R9",
  databaseURL: "https://koinbx-3e66e-default-rtdb.asia-southeast1.firebasedatabase.app" // ✅ Required for Realtime DB
};

// ✅ Prevent Duplicate Initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Export Realtime DB
export const rtdb = getDatabase(app);

// ✅ Optional: Export analytics only in browser
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
