<script setup lang="ts">
type SavedStatus = 'Want to Play' | 'Playing' | 'Finished' | 'Dropped'

interface SavedGame {
  id: number
  title: string
  imageUrl: string
  description: string
  tags: string[]
  estimatedHours: number
  status: SavedStatus
  note: string
}

const props = defineProps<{
  game: SavedGame
}>()

const { updateSavedGame, deleteSavedGame } = useSavedGames()

const editingNote = ref(false)
const savingNote = ref(false)
const updatingStatus = ref(false)
const deleting = ref(false)
const errorMessage = ref('')

const localNote = ref(props.game.note || '')
const localStatus = ref<SavedStatus>(props.game.status)

const statusOptions: SavedStatus[] = [
  'Want to Play',
  'Playing',
  'Finished',
  'Dropped'
]

watch(
  () => props.game.note,
  (value) => {
    if (!editingNote.value) {
      localNote.value = value || ''
    }
  }
)

watch(
  () => props.game.status,
  (value) => {
    localStatus.value = value
  }
)

const saveNote = async () => {
  try {
    savingNote.value = true
    errorMessage.value = ''

    await updateSavedGame(props.game.id, {
      note: localNote.value
    })

    editingNote.value = false
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Could not save your note.'
  } finally {
    savingNote.value = false
  }
}

const cancelEdit = () => {
  localNote.value = props.game.note || ''
  editingNote.value = false
  errorMessage.value = ''
}

const updateStatus = async (value: SavedStatus) => {
  try {
    updatingStatus.value = true
    errorMessage.value = ''

    localStatus.value = value

    await updateSavedGame(props.game.id, {
      status: value
    })
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Could not update status.'
  } finally {
    updatingStatus.value = false
  }
}

const removeGame = async () => {
  try {
    deleting.value = true
    errorMessage.value = ''

    await deleteSavedGame(props.game.id)

    await refreshNuxtData()
    window.location.reload()
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Could not remove this game.'
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <v-card class="glass-card card-hover h-100 saved-card" rounded="2xl">
    <v-img :src="game.imageUrl" height="220" cover />

    <v-card-text class="pa-6">
      <div class="d-flex align-start justify-space-between ga-3 mb-3">
        <div>
          <div class="text-h6 font-weight-bold mb-2">{{ game.title }}</div>
          <StatusChip :status="localStatus" />
        </div>

        <v-btn
          icon
          variant="text"
          :loading="deleting"
          @click="removeGame"
        >
          <v-icon icon="mdi-delete-outline" />
        </v-btn>
      </div>

      <div class="d-flex flex-wrap ga-2 mb-4">
        <v-chip
          v-for="tag in game.tags"
          :key="tag"
          size="small"
          color="primary"
          variant="outlined"
        >
          {{ tag }}
        </v-chip>
      </div>

      <div class="text-body-2 text-medium-emphasis mb-3 d-flex align-center">
        <v-icon icon="mdi-clock-outline" class="mr-1" />
        {{ game.estimatedHours }} hours
      </div>

      <p class="text-body-2 text-medium-emphasis mb-4">
        {{ game.description }}
      </p>

      <v-select
        :model-value="localStatus"
        :items="statusOptions"
        label="Play status"
        density="comfortable"
        variant="solo-filled"
        hide-details
        class="mb-4"
        :loading="updatingStatus"
        @update:model-value="updateStatus"
      />

      <v-card class="pa-4 note-card" rounded="xl">
        <div class="d-flex align-center justify-space-between mb-2">
          <div class="text-caption text-medium-emphasis">Your note</div>

          <v-btn
            v-if="!editingNote"
            size="small"
            variant="text"
            prepend-icon="mdi-pencil-outline"
            @click="editingNote = true"
          >
            Edit
          </v-btn>
        </div>

        <template v-if="editingNote">
          <v-textarea
            v-model="localNote"
            rows="3"
            auto-grow
            hide-details
            placeholder="Write your thoughts about this game..."
            class="mb-3"
          />

          <div class="d-flex flex-wrap ga-2">
            <v-btn
              color="primary"
              :loading="savingNote"
              @click="saveNote"
            >
              Save note
            </v-btn>

            <v-btn
              variant="text"
              :disabled="savingNote"
              @click="cancelEdit"
            >
              Cancel
            </v-btn>
          </div>
        </template>

        <template v-else>
          <div class="text-body-2">
            {{ localNote || 'No note yet.' }}
          </div>
        </template>
      </v-card>

      <div
        v-if="errorMessage"
        class="text-body-2 mt-3"
        style="color: #ff8a80;"
      >
        {{ errorMessage }}
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.saved-card {
  overflow: hidden;
}

.note-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
</style>