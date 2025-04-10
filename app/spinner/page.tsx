export default function SpinnerPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-background">
      <div className="text-center animate-scale">
        <div className="relative mx-auto h-32 w-32">
          <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
          <div className="absolute inset-0 rounded-full border-8 border-t-primary animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 animate-pulse"></div>
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-bold animate-fade-in animation-delay-300">Loading...</h2>
        <p className="mt-2 text-muted-foreground animate-fade-in animation-delay-500">
          Please wait while we prepare your delicious content
        </p>
      </div>
    </div>
  )
}
