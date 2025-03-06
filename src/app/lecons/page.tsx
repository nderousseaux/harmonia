import * as motion from 'motion/react-client';

// Home page
export default function Page() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="lg:flex min-h-screen flex-col p-6 items-center justify-center hidden">
      <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100">
      <h1 className="text-2xl">
        Sélectionnez une leçon pour commencer
      </h1>
      </div>
    </motion.main>
  );
}
