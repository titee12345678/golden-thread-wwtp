'use client';
import { useState, useEffect } from 'react';
import { Lock, ShieldCheck, AlertCircle, ChevronRight } from 'lucide-react';

interface PasscodeGateProps {
  children: React.ReactNode;
}

export default function PasscodeGate({ children }: PasscodeGateProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passcode, setPasscode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const CORRECT_PASSCODE = '010526';

  useEffect(() => {
    const authorized = localStorage.getItem('site_authorized');
    if (authorized === 'true') {
      setIsAuthorized(true);
    }
    setIsLoading(false);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
    setError(false);

    // Auto focus next input
    if (value !== '' && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && passcode[index] === '' && index > 0) {
      const prevInput = document.getElementById(`digit-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const entered = passcode.join('');
    if (entered === CORRECT_PASSCODE) {
      localStorage.setItem('site_authorized', 'true');
      setIsAuthorized(true);
    } else {
      setError(true);
      setPasscode(['', '', '', '', '', '']);
      document.getElementById('digit-0')?.focus();
    }
  };

  useEffect(() => {
    if (passcode.every(digit => digit !== '')) {
      handleSubmit();
    }
  }, [passcode]);

  if (isLoading) return null;

  if (isAuthorized) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md px-6 animate-fade-in-up">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20">
            <Lock className="w-10 h-10 text-white animate-pulse" />
          </div>

          <h1 className="text-3xl font-black text-white mb-3 tracking-tight">PROTECTED AREA</h1>
          <p className="text-slate-400 font-bold mb-10">กรุณาใส่รหัสผ่าน 6 หลักเพื่อเข้าชมโครงการ</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between gap-2 md:gap-3">
              {passcode.map((digit, i) => (
                <input
                  key={i}
                  id={`digit-${i}`}
                  type="text"
                  inputMode="numeric"
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`w-10 h-14 md:w-12 md:h-16 text-center text-2xl font-black rounded-xl border-2 transition-all outline-none 
                    ${error 
                      ? 'border-red-500 bg-red-500/10 text-red-500' 
                      : 'border-white/20 bg-white/5 text-white focus:border-primary focus:bg-white/10'
                    }`}
                  autoFocus={i === 0}
                  autoComplete="off"
                />
              ))}
            </div>

            {error && (
              <div className="flex items-center justify-center gap-2 text-red-400 font-bold animate-shake">
                <AlertCircle className="w-4 h-4" />
                <span>รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              ยืนยันรหัสผ่าน
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            SECURE ACCESS SYSTEM
          </div>
        </div>
      </div>
    </div>
  );
}
