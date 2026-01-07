'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiRedux } from "react-icons/si";

export default function ReduxPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'store', title: 'Store' },
    { id: 'slices', title: 'Slices' },
    { id: 'async', title: 'Async Logic' },
    { id: 'rtk-query', title: 'RTK Query' },
    { id: 'patterns', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/frontend" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/frontend" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Frontend
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-full border border-purple-500/30 mb-8">
              <SiRedux className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-semibold">Redux Toolkit Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Redux Toolkit</span>
              <span className="text-white block text-4xl">Official Redux Logic</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              The official, opinionated, batteries-included toolset for efficient Redux development.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <div className="glass rounded-2xl p-6 border border-white/10 sticky top-28">
                <h3 className="text-white font-semibold mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="col-span-9">
              {activeSection === 'basics' && <BasicsSection />}
              {activeSection === 'store' && <StoreSection />}
              {activeSection === 'slices' && <SlicesSection />}
              {activeSection === 'async' && <AsyncSection />}
              {activeSection === 'rtk-query' && <RTKQuerySection />}
              {activeSection === 'patterns' && <PatternsSection />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BasicsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Redux Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Redux is a predictable state container for JavaScript apps. Redux Toolkit simplifies Redux usage.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <ConceptCard title="Store" description="Single source of truth for application state" color="purple" />
        <ConceptCard title="Actions" description="Plain objects describing what happened" color="purple" />
        <ConceptCard title="Reducers" description="Pure functions that update state" color="purple" />
      </div>

      <CodeExample
        language="typescript"
        code={`// Installation
npm install @reduxjs/toolkit react-redux

// Basic Redux Flow
// 1. User Action → 2. Dispatch Action → 3. Reducer Updates State → 4. Store Updates → 5. Components Re-render

// Simple Counter Example
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer handles immutability
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`}
      />
    </div>
  );
}

function StoreSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Store Configuration</h2>
        <p className="text-white/60 text-lg mb-8">
          The store holds the complete state tree of your application and provides methods to interact with it.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  // Optional: Add middleware, devTools, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['someAction'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// App Setup (main.tsx or _app.tsx)
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <YourApp />
    </Provider>
  );
}

// Typed Hooks for TypeScript
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();`}
      />
    </div>
  );
}

function SlicesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Creating Slices</h2>
        <p className="text-white/60 text-lg mb-8">
          createSlice generates action creators and action types automatically from reducer functions.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// store/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { setLoading, setUser, setError, clearUser } = userSlice.actions;
export default userSlice.reducer;

// Using in Component
import { useAppDispatch, useAppSelector } from '../hooks';
import { setUser, clearUser } from '../store/slices/userSlice';

function UserProfile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleLogin = () => {
    dispatch(setUser({ id: 1, name: 'John', email: 'john@example.com' }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}`}
      />
    </div>
  );
}

function AsyncSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Async Logic with createAsyncThunk</h2>
        <p className="text-white/60 text-lg mb-8">
          Handle asynchronous operations like API calls with createAsyncThunk.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// store/slices/postsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  body: string;
}

// Async Thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('https://api.example.com/posts');
    return response.json();
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost: Omit<Post, 'id'>) => {
    const response = await fetch('https://api.example.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
    });
    return response.json();
  }
);

interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      })
      // Create Post
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default postsSlice.reducer;

// Using in Component
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchPosts, createPost } from '../store/slices/postsSlice';

function PostsList() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(createPost({ title: 'New Post', body: 'Content' }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={handleCreate}>Create Post</button>
      {items.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`}
      />
    </div>
  );
}

function RTKQuerySection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">RTK Query</h2>
        <p className="text-white/60 text-lg mb-8">
          Powerful data fetching and caching tool built on top of Redux Toolkit.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// store/api/postsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: ['Post'],
    }),
    getPost: builder.query<Post, number>({
      query: (id) => \`posts/\${id}\`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation<Post, { id: number; data: Partial<Post> }>({
      query: ({ id, data }) => ({
        url: \`posts/\${id}\`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: \`posts/\${id}\`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;

// Store Configuration
import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api/postsApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

// Using in Component
function PostsList() {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  const handleCreate = async () => {
    try {
      await createPost({ title: 'New Post', body: 'Content' }).unwrap();
    } catch (err) {
      console.error('Failed to create post:', err);
    }
  };

  return (
    <div>
      <button onClick={handleCreate} disabled={isCreating}>
        Create Post
      </button>
      {posts?.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`}
      />
    </div>
  );
}

function PatternsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Best Practices</h2>
        <p className="text-white/60 text-lg mb-8">
          Follow these patterns and practices for maintainable Redux applications.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-purple-400 font-semibold mb-4">Do's</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>✓ Use Redux Toolkit</li>
            <li>✓ Normalize nested data</li>
            <li>✓ Keep state minimal</li>
            <li>✓ Use selectors for computed values</li>
            <li>✓ Type everything with TypeScript</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <h3 className="text-red-400 font-semibold mb-4">Don'ts</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>✗ Don't put everything in Redux</li>
            <li>✗ Don't mutate state directly</li>
            <li>✗ Don't put non-serializable values</li>
            <li>✗ Don't create too many slices</li>
            <li>✗ Don't over-normalize data</li>
          </ul>
        </div>
      </div>

      <CodeExample
        language="typescript"
        code={`// Selectors (reselect library)
import { createSelector } from '@reduxjs/toolkit';

const selectPosts = (state: RootState) => state.posts.items;
const selectFilter = (state: RootState) => state.posts.filter;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectFilter],
  (posts, filter) => posts.filter(post => 
    post.title.includes(filter)
  )
);

// Normalized State Shape
interface NormalizedState {
  users: {
    entities: { [id: number]: User };
    ids: number[];
  };
  posts: {
    entities: { [id: number]: Post };
    ids: number[];
  };
}

// Memoized Selectors
const selectUserById = createSelector(
  [(state: RootState) => state.users.entities, (state: RootState, id: number) => id],
  (entities, id) => entities[id]
);`}
      />
    </div>
  );
}

function ConceptCard({ title, description, color }: { title: string; description: string; color: string }) {
  return (
    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
      <h3 className="text-purple-400 font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  );
}

function CodeExample({ code, language = 'typescript' }: { code: string; language?: string }) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-white/10">
        <span className="text-xs text-white/60 uppercase">{language}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-white/60 hover:text-white transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-white/90 font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

