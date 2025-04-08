

interface SubmittedCallbackProps<T = unknown> {
    onSubmit: (props: T) => Promise<void>;
    onSuccess: () => void;
    onError: (error: Error) => void;
}

type SubmitCallback<T = unknown> = SubmittedCallbackProps<T>["onSubmit"];

export function useSubmittedCallback<T = unknown>({
    onSubmit,
    onSuccess,
    onError
}: SubmittedCallbackProps<T>): SubmitCallback<T> {

    return async function handleSubmit(props: T) {
        try {
            await onSubmit(props);
            onSuccess();
        } catch (error) {
            onError(error as Error);
        }
    }

}